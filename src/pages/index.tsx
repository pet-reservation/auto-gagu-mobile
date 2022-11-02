import Login from 'src/components/Login';
import styled from 'styled-components';

export default function Home() {
  return (
    <Container>
      <Login />
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  height: 100%;
`;
