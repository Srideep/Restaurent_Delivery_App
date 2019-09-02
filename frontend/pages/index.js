/* pages/index.js */
import { Button, Alert } from "reactstrap";
import Layout from "../components/Layout";

export default () => {
  return (
    <Layout>
      <div>
        <Alert color= "primary">
          Welcome to Maulik Tech Restaurent App
        </Alert>
        <Button color="primary">
          Hello from Maulik Tech
        </Button>
      </div>
    </Layout>
  );
};
