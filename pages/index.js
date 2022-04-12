import Head from 'next/head'
import styles from '../styles/Home.module.css'
import {
  createStyles,
  Image,
  Container,
  Title,
  Button,
  Group,
  Text,
  List,
  ThemeIcon,
  MantineProvider,
} from '@mantine/core';
import { Check } from 'tabler-icons-react'
import image from '../public/journey.svg'

const useStyles = createStyles((theme) => ({
  inner: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: theme.spacing.xl * 4,
    paddingBottom: theme.spacing.xl * 4,
  },

  content: {
    maxWidth: 480,
    marginRight: theme.spacing.xl * 3,

    [theme.fn.smallerThan('md')]: {
      maxWidth: '100%',
      marginRight: 0,
    },
  },

  title: {
    color: theme.colorScheme === 'dark' ? theme.white : theme.black,
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    fontSize: 44,
    lineHeight: 1.2,
    fontWeight: 900,

    [theme.fn.smallerThan('xs')]: {
      fontSize: 28,
    },
  },

  control: {
    [theme.fn.smallerThan('xs')]: {
      flex: 1,
    },
  },

  image: {
    flex: 1,

    [theme.fn.smallerThan('md')]: {
      display: 'none',
    },
  },

  highlight: {
    position: 'relative',
    backgroundColor:
      theme.colorScheme === 'dark'
        ? theme.fn.rgba(theme.colors[theme.primaryColor][6], 0.55)
        : theme.colors[theme.primaryColor][0],
    borderRadius: theme.radius.sm,
    padding: '4px 12px',
  },
}));


export default function Home() {
  const { classes } = useStyles(); 
  return (
    <MantineProvider>
    <div className={styles.container}>
      <Head>
        <title>Vay-k</title>
        <meta name="description" content="Vay-k traveling re-engineered" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Container>
        <div className={classes.inner}>
          <div className={classes.content}>
            <Title className={classes.title}>
              A <span className={classes.highlight}>modern</span> way <br /> to travel the world
            </Title>
            <Text color="dimmed" mt="md">
                Reduce your time and energy in planning while trusting your sources of information.
            </Text>

              <List
              mt={30}
              spacing="sm"
              size="sm"
              icon={
                <ThemeIcon size={20} radius="xl">
                  <Check size={12} />
                </ThemeIcon>
              }
            >
              <List.Item>
                <b>Flexible Structure</b> – Design vacations with as many destinations and spots as you want.
              </List.Item>
              <List.Item>
                <b>Crowd Sourced</b> – All of the information surrounding your destination is open, we don't pay or receive anything from these locations.
              </List.Item>
              <List.Item>
                <b>Collaborate</b> – Share your trips with friends and family for easy organization
              </List.Item>
            </List>

            <Group mt={30}>
              <Button radius="xl" size="md" className={classes.control}>
                Get started
              </Button>
            </Group>
          </div>
          <Image src={image.src} className={classes.image} />
        </div>
      </Container>
    </div>
      </MantineProvider>
  )
}
Home.title = ""
