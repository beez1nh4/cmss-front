import MuiButton from '@material-ui/core/Button';
import styled from 'styled-components';
import { mainColor } from '../../constants/colors';
import { createTheme, alpha, getContrastRatio } from '@material-ui/core';

export default function Button({ variant='contained', children, ...props }) {
  return (
    <StyledMuiButton variant={variant} {...props}>
      {children}
    </StyledMuiButton>
  );
}

const StyledMuiButton = styled(MuiButton)`
  margin-top: 8px !important;
`;


const colorMain = alpha(mainColor, 1);

export const theme = createTheme({
  palette: {
    backgroundColor: {
      main: colorMain,
      light: alpha(colorMain, 0.5),
      dark: alpha(colorMain, 0.9),
      contrastText: getContrastRatio(colorMain, '#fff') > 4.5 ? '#fff' : '#111',
    },
  },
});
