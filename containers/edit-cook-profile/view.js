import SaveButton from "components/save-button";
import { PageContainer, PageContent } from "components/boxes";
import { PageTitle, PageSubTitle } from "components/text";
import { FieldSet, Label, SubLabel } from "components/fieldset";
import { InputDark, TextAreaDark } from "components/input-text";
import InputSelect from "components/input-select";
import SearchAddress from "components/search-address";
import { Form, InputContainer, DeliveryZoneSubtitle } from "./styled";
import { withHandlers, compose } from "recompose";
import { Formik } from "formik";
import { keys, defaults } from "lodash";

export const View = ({ subtitle, me, onSubmit }) => (
  <PageContainer light={true}>
    <PageContent>
      <PageTitle>Mi perfil de cocinero</PageTitle>
      {subtitle && <PageSubTitle>{subtitle}</PageSubTitle>}
      <Formik
        initialValues={defaults(me, {
          deliveryRadiusInMeters: 1000
        })}
        onSubmit={onSubmit}
      >
        {({
          setFieldTouched,
          setFieldValue,
          setStatus,
          handleSubmit,
          handleChange,
          handleBlur,
          isSubmitting,
          values,
          status,
          touched
        }) => (
          <Form
            onSubmit={handleSubmit}
            onChange={() => {
              setFieldTouched("");
              setStatus("");
            }}
          >
            {/* {console.log(values)} */}
            <FieldSet>
              <Label required>Nombre Completo</Label>
              <InputDark
                name="fullName"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.fullName}
              />
            </FieldSet>

            <FieldSet>
              <Label>Algo sobre vos</Label>
              <TextAreaDark
                name="bio"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.bio}
              />
            </FieldSet>

            <FieldSet as="div">
              <Label>Zona de repartos</Label>
              <DeliveryZoneSubtitle>
                Elegí la zona que más te guste para vender tus comidas.
                Recomendamos que sea cerca de tu cocina.
              </DeliveryZoneSubtitle>
              <InputSelect
                name="deliveryRadiusInMeters"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.deliveryRadiusInMeters}
              >
                <option value={1000}>1 kilometro alrededor de</option>
                <option value={2000}>2 kilometros alrededor de</option>
              </InputSelect>
              <InputContainer>
                <SearchAddress
                  name="deliveryCenter"
                  value={{
                    address: values.deliveryCenterAddress,
                    location: values.deliveryCenterLocation
                  }}
                  onChange={({ location, address }) => {
                    setFieldValue("deliveryCenterLocation", location);
                    setFieldValue("deliveryCenterAddress", address);
                  }}
                  onBlur={handleBlur}
                />
              </InputContainer>
            </FieldSet>

            <FieldSet>
              <SaveButton
                touched={keys(touched).length}
                saving={isSubmitting}
                saved={status == "completed"}
              />
            </FieldSet>
          </Form>
        )}
      </Formik>
    </PageContent>
  </PageContainer>
);

const enhace = withHandlers({
  onSubmit: props => (values, { setStatus, setSubmitting }) => {
    // console.log(values);
    props
      .onUpdateUser({
        ...values,
        deliveryRadiusInMeters: parseInt(values.deliveryRadiusInMeters)
      })
      .then(() => {
        setSubmitting(false);
        setStatus("completed");
      });
  }
});

export default enhace(View);
