import React from 'react';
import { Row, Col } from 'reactstrap';

const Footer = () => {
  const thisYear = () => {
    return new Date().getFullYear();
  };

  return (
    <div id="main-footer" className="text-center p-2">
      <Row>
        <Col>
          <p>Copyright &copy; <span>{thisYear()}</span></p>
        </Col>
      </Row>
    </div>
  );
};

export default Footer;
