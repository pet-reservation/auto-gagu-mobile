import styled from 'styled-components';

const Text = styled.div`
  font-size: ${({ theme }) => theme.fontSize.title20};
`;
export default function Home() {
  return <Text>모바일버전</Text>;
}
