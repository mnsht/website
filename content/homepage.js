import ListItem from '../components/list-item';

import patrick from '../static/logo-square.jpg';

export default {
  name: 'Patrick Cason',
  avatar: patrick,
  social: [
    {
      type: 'github',
      link: 'https://github.com/cereallarceny'
    },
    {
      type: 'linkedin',
      link: 'https://linkedin.com/in/patrickcason/'
    },
    {
      type: 'medium',
      link: 'https://medium.com/@cereallarceny'
    },
    {
      type: 'stack-overflow',
      link: 'https://stackoverflow.com/users/591776/cereallarceny'
    }
  ],
  tagline: (
    <React.Fragment>
      I'm a <strong>software engineer</strong> and <strong>UI designer</strong>{' '}
      working <strong>remotely in Lisbon, Portugal</strong>.
    </React.Fragment>
  ),
  bio:
    "I've worked for the past 10 years as a technologist in the politics, finance, healthcare, hospitality, and music industries. In particular I'm interested in online privacy, open-source software, and ethical programming.",
  opinions: (
    <React.Fragment>
      A few strong opinions:
      <ListItem>
        People should own, host, and fully control all of their online
        information.
      </ListItem>
      <ListItem>
        The term "user experience" should not be used as an excuse to monitor
        and manipulate individuals.
      </ListItem>
      <ListItem>
        Technology should be designed to serve people, rewarding intuition and
        promoting non-addictive behavior.
      </ListItem>
    </React.Fragment>
  ),
  projects: [
    {
      title: 'OpenMined',
      description:
        'An open-source community focused on researching, developing, and promoting tools for secure, privacy-preserving, value-aligned artificial intelligence.',
      roles: [
        'Founding member and community manager',
        'Author of syft.js',
        'Designed and developed website',
        'Manages all dev ops infrastructure'
      ],
      links: [
        {
          type: 'website',
          link: 'https://openmined.org'
        },
        {
          type: 'twitter',
          link: 'https://twitter.com/openminedorg'
        },
        {
          type: 'github',
          link: 'https://github.com/openmined'
        }
      ]
    },
    {
      title: 'Scholar Raise',
      description:
        "A fintech service that helps people save for their child's college education using crowdfunding and automated investment management.",
      roles: [
        'Chief Product Officer',
        'Responsible for all design, development, and dev ops infrastructure',
        'Leads a fully remote staff in weekly SCRUM meetings'
      ],
      links: [
        {
          type: 'website',
          link: 'https://scholarraise.com'
        },
        {
          type: 'twitter',
          link: 'https://twitter.com/scholarraise'
        },
        {
          type: 'facebook',
          link: 'https://facebook.com/scholarraise'
        },
        {
          type: 'instagram',
          link: 'https://instagram.com/scholarraise'
        }
      ]
    },
    {
      title: 'Moonshot',
      description:
        'A mashup between an open-source collective, design studio, and a dev shop all roled into one.',
      roles: [
        'Manage and develop multiple open-source projects',
        "We're available for hire - insert seed money, receive bacon"
      ],
      links: [
        {
          type: 'website',
          link: 'https://moonshot.is/awesome'
        },
        {
          type: 'github',
          link: 'https://github.com/mnsht'
        }
      ]
    }
  ]
};
