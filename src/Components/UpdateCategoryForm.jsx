import { Form, Formik } from "formik";
import { useContext } from "react";
import * as Yup from "yup";
import FetchedDataContext from "../Contexts/FetchedDataContext.jsx";
import FormElementControl from "./FormElementControl.jsx";

const UpdateCategoryForm = ({ closeModal, id }) => {
  const { categContext, setProductsContext, productsContext, setCategContext } =
    useContext(FetchedDataContext);
  const selectedRow = categContext.filter((item) => item.id === id)[0];
  const initialValues = {
    name: selectedRow.name,
  };

  const validationSchema = Yup.object({
    name: Yup.string().required("Required"),
  });

  const onSubmit = (values) => {
    const dataToSend = {
      name: values.name,
    };

    closeModal();
    const newCategories = categContext.map((category) => {
      if (category.id === id) {
        return dataToSend;
      }
      return category;
    });

    const newProducts = productsContext.map((product) => {
      if (product.category === selectedRow.name) {
        return {
          ...product,
          category: values.name,
        };
      }
      return product;
    });

    setCategContext(newCategories);
    setProductsContext(newProducts);
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {(formik) => {
        return (
          <Form>
            <FormElementControl
              control="input"
              label="Category Name"
              name="name"
            />

            <div className="form-buttons-container">
              <button onClick={closeModal} className="cancel-btn">
                Cancel
              </button>
              <button
                type="submit"
                disabled={!formik.isValid}
                className="submit-btn"
              >
                Submit
              </button>{" "}
            </div>
          </Form>
        );
      }}
    </Formik>
  );
};
export default UpdateCategoryForm;
