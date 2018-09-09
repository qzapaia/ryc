import gql from "graphql-tag";
import { Query } from "react-apollo";
import PropTypes from "prop-types";
import LoginContainer from "containers/login/withData";

export const ME = gql`
  query {
    me {
      id
      fullName
      bio
      deliveryCenterLocation
      deliveryRadiusInMeters
    }
  }
`;

export const WithMe = props => (
  <Query query={ME}>
    {({ loading, data, error, refetch }) => {
      const me = data && data.me;
      const completed = !loading && !error;
      const params = {
        loading,
        refetch,
        queryName: "me",
        completed,
        me,
        error,
        query: ME
      };

      if (props.renderOnCompleted && !completed) {
        return <span />;
      } else if (completed && !me && props.askLogin) {
        return <LoginContainer loginMessage={props.loginMessage} />;
      } else if(typeof props.children == 'function') {
        return props.children(params);
      }else{
        return <span>{props.children}</span>;
      }
    }}
  </Query>
);

WithMe.defaultProps = {
  renderOnCompleted: true,
  askLogin: false
};

WithMe.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.node
  ]).isRequired,
  renderOnCompleted: PropTypes.bool,
  askLogin: PropTypes.bool
};

export default WithMe;
