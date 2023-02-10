import Form from "../components/Form";

const SignUpPage = () => {
    const formUrl: string = import.meta.env.VITE_FORM_URL;

    return <Form url={formUrl} id="signup-form" />;
};

export default SignUpPage;
