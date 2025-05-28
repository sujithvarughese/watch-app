"use client"
import {Container, Title, Text, Space, List, Group, Anchor} from '@mantine/core';

const PrivacyPolicy = () => {
  return (
    <Container size="lg" py="xl">
      <Title order={1} ta="center" mb="xl">
        Privacy Policy
      </Title>

      <Text mb="xl">
        Last updated: May 2025
      </Text>

      <Title order={2} mb="md">Information We Collect</Title>
      <Text mb="xl">
        When using Authentime, we collect and process the following information:
        - Images you upload for watch authentication
        - Device information and IP address
        - Usage data and interaction with our services
      </Text>

      <Title order={2} mb="md">How We Use Your Information</Title>
      <List spacing="sm" size="md" mb="xl">
        <List.Item>To provide watch authentication services</List.Item>
        <List.Item>To improve our AI model and service accuracy</List.Item>
        <List.Item>To maintain and enhance our service</List.Item>
        <List.Item>To communicate with you about our services</List.Item>
      </List>

      <Title order={2} mb="md">Data Storage and Security</Title>
      <Text mb="xl">
        We implement appropriate security measures to protect your information. Uploaded images
        are stored securely and processed using encrypted connections. We retain data only for
        as long as necessary to provide our services.
      </Text>

      <Title order={2} mb="md">Your Rights</Title>
      <Text mb="xl">
        You have the right to:
        - Access your personal data
        - Request deletion of your data
        - Object to data processing
        - Request data portability
      </Text>

      <Space h="xl"/>

      <Text c="dimmed" size="sm" ta="center">
        Contact us at privacy@authentime.com for any privacy-related inquiries or to exercise
        your data rights.
      </Text>
    </Container>
  );
};

export default PrivacyPolicy;