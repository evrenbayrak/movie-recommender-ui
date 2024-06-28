import styled from 'styled-components';

const RuntimeWrapper = styled.div`
  position: absolute;
  top: 15px;
  background-color: rgba(212, 217, 37, 0.7); /* D4D925 with transparency */
  color: #fff;
  font-size: 12px;
  font-weight: bold;
  padding: 0px 10px;
  clip-path: polygon(0% 0%, 75% 0%, 100% 50%, 75% 100%, 0% 100%);
`;

const RuntimeComponent = ({ runtime }) => {
  const hours = Math.floor(runtime / 60);
  const minutes = runtime % 60;
  let displayRuntime = '';

  if (hours > 0) {
    displayRuntime += `${hours}h `;
  }
  if (minutes > 0) {
    displayRuntime += `${minutes}m`;
  }

  return (
    <RuntimeWrapper>
      {displayRuntime}
    </RuntimeWrapper>
  );
};

export default RuntimeComponent;