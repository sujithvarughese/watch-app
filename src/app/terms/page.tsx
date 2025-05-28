"use client"
import {Container, Title, Text, Space, List} from '@mantine/core';

const TermsAndConditions = () => {
  return (
    <Container size="lg" py="xl">
      <Title order={1} ta="center" mb="xl">
        Terms and Conditions
      </Title>

      <Text mb="xl">
        Last updated: May 2025
      </Text>

      <Title order={2} mb="md">1. Acceptance of Terms</Title>
      <Text mb="xl">
        By accessing and using Authentime, you agree to be bound by these Terms and Conditions.
        These terms govern your use of our watch authentication services and website.
      </Text>

      <Title order={2} mb="md">2. Service Description</Title>
      <Text mb="xl">
        Authentime provides AI-powered watch authentication services. Our service analyzes
        uploaded images to provide authenticity assessments of luxury timepieces. The results
        are for informational purposes only and should not be considered as definitive
        authentication.
      </Text>

      <Title order={2} mb="md">3. User Responsibilities</Title>
      <List spacing="sm" size="md" mb="xl">
        <List.Item>You must provide clear, high-quality images for analysis</List.Item>
        <List.Item>You must own the rights to all uploaded images</List.Item>
        <List.Item>You agree not to misuse or attempt to deceive our service</List.Item>
        <List.Item>You are responsible for maintaining your account security</List.Item>
      </List>

      <Title order={2} mb="md">4. Limitation of Liability</Title>
      <Text mb="xl">
        Authentime provides assessments based on AI analysis but cannot guarantee the accuracy
        of results. We are not liable for any decisions made based on our authentication
        results. For definitive authentication, please consult authorized dealers or brand
        service centers.
      </Text>

      <Title order={2} mb="md">5. Intellectual Property</Title>
      <Text mb="xl">
        All content, features, and functionality of Authentime are owned by us and are
        protected by international copyright, trademark, and other intellectual property laws.
      </Text>

      <Space h="xl"/>

      <Text c="dimmed" size="sm" ta="center">
        For any questions regarding these terms, please contact legal@authentime.com
      </Text>
    </Container>
  );
};

export default TermsAndConditions;