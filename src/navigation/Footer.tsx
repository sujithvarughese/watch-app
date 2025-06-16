'use client';

import {Box, Container, Flex, Grid, Group, Image, Text} from '@mantine/core';
import Link from 'next/link';

const navigationLinks = [
  {link: '/', label: 'Home'},
  {link: '/about', label: 'About'},
  {link: '/privacy', label: 'Privacy'},
  {link: '/terms', label: 'Terms'},
];

const socialLinks = [
  {link: 'https://x.com/authentime', label: 'Twitter', icon: '𝕏'},
];

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <Box component="footer" className="border-t bg-gray-50 py-12 mt-auto">
      <Container size="lg">
        <Grid>
          <Grid.Col span={{base: 12, sm: 4}}>
            <div className="flex flex-col items-center sm:items-start gap-4">
              <Link href="/" className="text-xl font-bold no-underline">
                <Image src="/logo.png" alt="logo" w={130} />
              </Link>
              <Text size="sm" className="text-gray-600 text-center sm:text-left">
                Your trusted partner in excellence
              </Text>
            </div>
          </Grid.Col>

          <Grid.Col span={{base: 12, sm: 4}}>
            <div className="flex flex-col items-center gap-4">
              <Group gap={16}>
                {navigationLinks.map((link) => (
                  <Link
                    key={link.label}
                    href={link.link}
                    className="text-sm text-gray-600 hover:text-gray-900 no-underline transition-colors"
                  >
                    {link.label}
                  </Link>
                ))}
              </Group>
            </div>
          </Grid.Col>

          <Grid.Col span={{base: 12, sm: 4}}>
            <Flex align="center" justify="center" className="text-center sm:text-left" gap={8}>
              <Text className="font-semibold">Follow us on</Text>
              <Group gap={16}>
                {socialLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-8 h-8 flex items-center justify-center bg-gray-200 rounded-full text-gray-700 hover:bg-gray-300 transition-colors"
                  >
                    {link.icon}
                  </a>
                ))}
              </Group>
            </Flex>
          </Grid.Col>

          <Grid.Col span={12}>
            <Text size="sm" className="text-center text-gray-500 mt-8">
              © {year} Authentime. All rights reserved.
            </Text>
          </Grid.Col>
        </Grid>
      </Container>
    </Box>
  );
}