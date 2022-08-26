import { useState } from 'react';
import {
	Box,
	Center,
	AppShell,
	Header,
	Footer,
	Aside,
	Text,
	MediaQuery,
	Burger,
	useMantineTheme
} from '@mantine/core';

import { NavbarNested } from './NavbarNested';
import { ColorSchemeButtonToggle } from '~/components/ColorSchemeButtonToggle';

export interface AppShellDemoProps {
	children: React.ReactNode;
}

export function AppShellDemo({ children }: AppShellDemoProps) {
	const theme = useMantineTheme();
	const [opened, setOpened] = useState(false);
	return (
		<AppShell
			styles={{
				main: {
					background: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[0]
				}
			}}
			navbarOffsetBreakpoint="sm"
			asideOffsetBreakpoint="sm"
			navbar={<NavbarNested />}
			aside={
				<MediaQuery smallerThan="sm" styles={{ display: 'none' }}>
					<Aside p="md" hiddenBreakpoint="sm" width={{ sm: 200, lg: 300 }}>
						<Text>Application sidebar</Text>
					</Aside>
				</MediaQuery>
			}
			footer={
				<Footer height={60} p="md">
					Application footer
				</Footer>
			}
			header={
				<Header height={70} p="md" sx={{ display: 'flex' }}>
					{/* <MediaQuery largerThan="sm" styles={{ display: 'none' }}>
							<Burger
								opened={opened}
								onClick={() => setOpened((o) => !o)}
								size="sm"
								color={theme.colors.gray[6]}
								mr="xl"
							/>
						</MediaQuery> */}

					<Box>
						<Text>Application header</Text>
					</Box>
					<Center sx={{ marginLeft: 'auto', display: 'flex' }}>
						<ColorSchemeButtonToggle />
					</Center>
				</Header>
			}
		>
			{children}
		</AppShell>
	);
}

export default AppShell;
