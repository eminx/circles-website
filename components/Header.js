import { Box, Image } from 'grommet';
import { Row, Col } from 'react-grid-system';

import Menu, { SocialMenu } from './Menu';

const Header = ({ large }) => {
  return (
    <Row style={{ alignItems: 'center' }}>
      <Col xs={2}>
        <Box pad={{ top: 'small' }}>
          <Image src="/images/logo.svg" />
        </Box>
      </Col>
      <Col xs={8}>{large && <Menu activeSection="donate" large />}</Col>
      <Col xs={2}>{large ? <SocialMenu /> : <Menu large={false} />}</Col>
    </Row>
  );
};

export default Header;
