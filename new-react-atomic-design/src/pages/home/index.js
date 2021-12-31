import Container from "../../organisms/container"


const LandingPageTemplate = (props) => {
  return (
    <>
        <header>{props.header}</header>
        <Container></Container>
        <footer>{props.footer}</footer>
    </>
  );
}

export default LandingPageTemplate;
