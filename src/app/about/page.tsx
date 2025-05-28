"use client"
import {Container, Title, Text, Space, List, ThemeIcon, Box, Group, Anchor} from '@mantine/core';
import {IconCheck} from '@tabler/icons-react';

const About = () => {
  return (
    <Container size="lg" py="xl">

      <Title order={1} ta="center" mb="xl">
        About Authentime
      </Title>

      <Box mb="xl">
        <Text size="lg">
          Authentime is a cutting-edge application that leverages artificial intelligence
          to analyze and authenticate luxury timepieces. Our sophisticated AI system
          examines various aspects of watches to help determine their authenticity.
        </Text>
      </Box>

      <Title order={2} mb="md">How It Works</Title>
      <List
        spacing="sm"
        size="lg"
        mb="xl"
        icon={
          <ThemeIcon color="blue" size={24} radius="xl">
            <IconCheck size="1rem"/>
          </ThemeIcon>
        }
      >
        <List.Item>Upload clear images of your watch</List.Item>
        <List.Item>Our AI analyzes multiple authentication factors</List.Item>
        <List.Item>Receive detailed authenticity ratings and analysis</List.Item>
        <List.Item>Get comprehensive insights about your timepiece</List.Item>
      </List>

      <Title order={2} mb="md">Authentication Factors</Title>
      <Text mb="sm">
        Our AI system evaluates watches based on several key factors:
      </Text>
      <List
        spacing="sm"
        size="lg"
        mb="xl"
        icon={
          <ThemeIcon color="blue" size={24} radius="xl">
            <IconCheck size="1rem"/>
          </ThemeIcon>
        }
      >
        <List.Item>Text Quality and Typography</List.Item>
        <List.Item>Dial Layout and Design</List.Item>
        <List.Item>Bezel Construction</List.Item>
        <List.Item>Case Quality</List.Item>
        <List.Item>Hand Craftsmanship</List.Item>
        <List.Item>Overall Build Quality</List.Item>
        <List.Item>Brand Consistency</List.Item>
        <List.Item>Band and Bracelet Analysis</List.Item>
      </List>

      <Space h="xl"/>

      <Text c="dimmed" ta="center" size="sm">
        Authentime is designed to assist in watch authentication but should not be
        considered as a definitive authentication service. For official authentication,
        please consult authorized dealers or brand service centers.
      </Text>
    </Container>
  );
};

export default About;