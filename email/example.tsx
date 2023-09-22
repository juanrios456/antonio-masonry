import {
  Body,
    Container,
  Head,
  Heading,
  Html,
  Preview,
  Section,
  Text,
} from '@react-email/components';
import * as React from 'react';

export interface EmailInfo {
  name: string;
  phone: string;
  email: string;
  details: string;
  project: string;
};


export function EmailTemplate(props:EmailInfo){
  const {name, phone, details, project, email} = props
return(
  <Html>
    <Head />
    <Preview>Open To View Form Information</Preview>
    <Body style={main}>
      <Container style={{...container, }}>
        <Heading style={{...h1, textAlign: 'center'}}>New Contact Form Filled From <br/>antoniosmasonryandstucco.com</Heading>
        <Section style={formInfo}>
            <Text style={{ ...text, ...infoType, }}>
              Name:
            </Text>
            <Text style={{...text, ...contactInfo}}>
              {name}
            </Text>
        </Section>  
        <Section style={formInfo}>
            <Text style={{ ...text, ...infoType}}>
              Phone Number:
            </Text>
            <Text style={{ ...text, ...contactInfo}}>
              {phone}
            </Text>
        </Section>  
        <Section style={formInfo}>
            <Text style={{ ...text, ...infoType}}>
              Email:
            </Text>
            <Text style={{ ...text, ...contactInfo}}>
              {email}
            </Text>
        </Section>  
        <Section style={formInfo}>
            <Text style={{ ...text, ...infoType}}>
              Project Type:
            </Text>
            <Text style={{ ...text, ...contactInfo}}>
              {project}
            </Text>
        </Section>  
        <Section style={formInfo}>
            <Text style={{ ...text, ...infoType}}>
              Project Details:
            </Text>
            <Text style={{ ...text, ...contactInfo}}>
              {details}
            </Text>
        </Section>  
      </Container>
    </Body>
  </Html>
)
};

const contactInfo = {
  marginTop: '0px',
};

const infoType = {
  fontSize: '20px',
  margin: '0',
  borderBottom: '1px solid rgba(0,0,0,0.8)',
};

const formInfo = {
  backgroundColor: 'rgb(241,241,244)',
  marginBottom: '10px',
  padding: '3px 10px',
};

const main = {
  backgroundColor: 'rgb(249, 249, 249)',
};

const container = {
  paddingLeft: '12px',
  paddingRight: '12px',
  margin: '0 auto',
};

const h1 = {
  color: '#333',
  fontFamily:
    "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
  fontSize: '24px',
  fontWeight: 'bold',
  margin: '40px 0',
  padding: '0',
};


const text = {
  color: '#333',
  fontFamily:
    "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
  fontSize: '14px',
  margin: '0',
};