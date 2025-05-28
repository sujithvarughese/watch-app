'use client';
import {
  Container,
  Group,
  Burger,
  Paper,
  Transition,
  Stack,
  Box, Image
} from '@mantine/core';
import {useDisclosure} from '@mantine/hooks';
import Link from 'next/link';

const links = [
  {link: '/', label: 'Home'},
  {link: '/about', label: 'About'},
  {link: '/privacy', label: 'Privacy Policy'},
  {link: '/terms', label: 'Terms'},
];

export function NavBar() {
  const [opened, {toggle}] = useDisclosure(false);

  return (
    <Box component="header" className="fixed w-full top-0 border-b z-50 bg-white">
      <Container size="lg" className="py-4">
        <div className="flex justify-between items-center">
          <Link href="/" className="text-xl font-bold no-underline">
            <Image src="/logo.png" alt="logo" w={130} />
          </Link>

          <Group gap={5} visibleFrom="sm">
            {links.map((link) => (
              <Link
                key={link.label}
                href={link.link}
                className="px-3 py-2 text-sm no-underline hover:bg-gray-100 rounded-md transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </Group>

          <Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="sm"/>

          <Transition transition="pop-top-right" duration={200} mounted={opened}>
            {(styles) => (
              <Paper
                className="absolute top-full left-0 right-0 border-b border-gray-200 p-4"
                hiddenFrom="sm"
                style={styles}
              >
                <Stack>
                  {links.map((link) => (
                    <Link
                      key={link.label}
                      href={link.link}
                      className="block px-3 py-2 text-sm no-underline hover:bg-gray-100 rounded-md transition-colors"
                      onClick={() => toggle()}
                    >
                      {link.label}
                    </Link>
                  ))}
                </Stack>
              </Paper>
            )}
          </Transition>
        </div>
      </Container>
    </Box>
  );
}