'use client'
import {
  Container,
  Heading,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  FormErrorMessage,
  Button,
  Text,
  Select,
  InputLeftElement,
  InputGroup,
  useToast,
} from '@chakra-ui/react'
import { useState } from 'react';
import Image from 'next/image';
import { BsTelephone,BsPerson,BsTools } from 'react-icons/bs';
import { AiOutlineMail } from 'react-icons/ai';
import styles from '@styles/contact.module.css'

export interface ContactFormValues{
  name: string,
  phone: string, 
  email: string,
  project: string,
  details: string,
}[]

const contactFormValues:ContactFormValues = {
  name: "", 
  phone: "",
  email: "",
  project: "",
  details: "",
}

const initState = {
  values: contactFormValues,
  isLoading: false,
  error: '',
}

const touchedState = {
  name: false,
  phone: false,
  email: false,
  details: false,
  project: false,
}

export function ContactForm(){

  const toast = useToast();
  const [state, setState] = useState(initState);
  const [touched, setTouched] = useState(touchedState);

  const {values, isLoading, error } = state;

  const onBlur = ({target}:any)=>{
    setTouched((prev:any)=>({
      ...prev,
      [target.name]: true,
    }))
  };

  const handleChange = ({target}:any)=>{
    setState((prev:any) =>({
      ...prev,
      values:{
        ...prev.values,
        [target.name]: target.value
    },
  }))

}

const onSubmit = async() =>{
  setState((prev:any) =>({
    ...prev,
    isLoading: true,
  }));


  try {
    await fetch('api/sendEmail',{
      method:'POST',
      body: JSON.stringify(values),
    })
    setTouched(touchedState);
    setState(initState);
    toast({
      title: "Message Sent",
      status: "success",
      duration: 2000,
      position: "top",
    });

  } catch (error: any) {
    setState((prev:any) =>({
      ...prev,
      isLoading: false,
      error: error.message,
    }));
  }
};

return(
<div id='contact' style={{position: 'relative', padding: '40px 0' }} >
  <Image src='/bricks.png' alt='bricks as a background with an opacity'
    width={900}
    height={650}
    style={{width: '100%', height: '100%', objectFit: 'cover',objectPosition: 'bottom', position: 'absolute', top: '0', zIndex: '-1', }}
  />
  <Container className={styles.grid} data-aos='fade-up'>
    <Heading className={styles.heading} color={'black'} fontFamily={'Adamina'} fontSize={'3xl'}>Contact Us!</Heading>
    {
      error && (
        <Text color={'red.300'} my={4} fontSize={'xl'} fontFamily={'Adamina'}>

        </Text>
      )
    }
    <FormControl className={styles.item1} isRequired isInvalid={touched.name && !values.name}>
      <FormLabel>Full Name</FormLabel>
      <InputGroup>
        <InputLeftElement pointerEvents={'none'}>
          <BsPerson/>
        </InputLeftElement>
        <Input
          type='text'
          name='name'
          value={values.name}
          onChange={handleChange}
          onBlur={onBlur}
          borderColor={'black'}
        />
      </InputGroup>
      <FormErrorMessage>Required</FormErrorMessage>
    </FormControl>
    <FormControl className={styles.item2} isRequired isInvalid={touched.phone && !values.phone}>
      <FormLabel>Phone Number</FormLabel>
        <InputGroup>
          <InputLeftElement pointerEvents='none'>
            <BsTelephone  />
          </InputLeftElement>
            <Input
              type='number'
              name='phone'
              value={values.phone}
              onChange={handleChange}
              onBlur={onBlur}
              borderColor={'black'}
            />
        </InputGroup>
      <FormErrorMessage>Required</FormErrorMessage>
    </FormControl>
    <FormControl className={styles.item3} isRequired isInvalid={touched.email && !values.email}>
      <FormLabel>Email</FormLabel>
      <InputGroup>
        <InputLeftElement pointerEvents={'none'}>
          <AiOutlineMail/>
        </InputLeftElement>
        <Input
          type='text'
          name='email'
          value={values.email}
          onChange={handleChange}
          onBlur={onBlur}
          borderColor={'black'}
        />
      </InputGroup>
      <FormErrorMessage>Required</FormErrorMessage>
    </FormControl>
    <FormControl className={styles.item4} isRequired isInvalid={touched.project && !values.project}>
      <FormLabel>Project Type</FormLabel>
      <Select onChange={handleChange} onBlur={onBlur} name='project' placeholder='---' borderColor={'black'}>
          {
            ['Stone', 'Block', 'Brick', 'Stucco'].map((option, index) =>{
              return(
                <option style={{color: 'var(--black)'}} key={index} value={option}>{option}</option>
              )
            })
          }
        </Select>
      <FormErrorMessage>Required</FormErrorMessage>
    </FormControl>
    <FormControl className={styles.item5} isRequired isInvalid={touched.details && !values.details}>
      <FormLabel>Additional Details</FormLabel>
      <Textarea
        name='details'
        value={values.details}
        onChange={handleChange}
        onBlur={onBlur}
        rows={4}
        borderColor={'black'}
        />
      <FormErrorMessage>Required</FormErrorMessage>
    </FormControl>
    <div className={styles.item6}>
      <Button 
        variant='outline'
        color={'var(--primary-white)'}
        isLoading={isLoading}
        isDisabled={!values.name || !values.details || !values.email || !values.project || !values.phone }
        onClick={onSubmit}
        borderColor={'black'}
      >
        Submit
      </Button>
    </div>
  </Container>
</div>
);
}