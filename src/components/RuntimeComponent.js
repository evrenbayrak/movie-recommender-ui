import styled from 'styled-components';
import { useTranslation } from 'react-i18next';

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
  const { t } = useTranslation();

  const hours = Math.floor(runtime / 60);
  const minutes = runtime % 60;

  let formattedRuntime;
  if (minutes === 0) {
      formattedRuntime = t('runtime_hours_only', { hours });
  } else {
      formattedRuntime = t('runtime_hours_minutes', { hours, minutes });
  }

  return (
    <RuntimeWrapper>
      {formattedRuntime}
    </RuntimeWrapper>
  );
};

export default RuntimeComponent;