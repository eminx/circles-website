import { Box, Button, Text } from 'grommet';
import { i18n } from '../i18n';

const LangSwitcher = ({ mobileMenu }) => (
  <Box alignSelf={mobileMenu ? 'center' : 'end'} pad={{ right: 'small' }}>
    <Button
      onClick={() => i18n.changeLanguage(i18n.language === 'en' ? 'de' : 'en')}
      label={
        <Text size="small" color={mobileMenu ? 'brand4' : 'white'}>
          {i18n.language === 'en' ? 'Deutsch' : 'English'}
        </Text>
      }
      hoverIndicator={false}
      plain
    />
  </Box>
);

export default LangSwitcher;
