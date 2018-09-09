import {findKey} from "lodash";
import EditCookProfile from "containers/edit-cook-profile";
import WithMe from "containers/with-me"


const completeProfile = me => !findKey(me, t=>!t)
const SubtitleMessage = () => <span>Para continuar, por favor completá <br/> todo tu perfil de cocinero</span>

export default ({ loginMessage, children }) => (
  <WithMe>
    {({ completed, me }) => {
      if(completed && !completeProfile(me)) {
        return <EditCookProfile subtitle={<SubtitleMessage />} />
      } else if (completeProfile(me)) {
        return children;
      }
    }}
  </WithMe>
);
