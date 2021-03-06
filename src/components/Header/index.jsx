import {Container, Row, Col} from 'reactstrap'
import ScrollAnimation from 'react-animate-on-scroll'

const AnimatedLine = ({wrapper, queueNumber, children}) => (
    <ScrollAnimation
      animateIn="fadeInUp"
      animateOnce={true}
      delay={queueNumber*500}
      scrollableParentSelector={'.' + wrapper}
    >{ children }</ScrollAnimation>)

export default compose(injectSheet(({defaultSection, breakpoints, highlightedColor}) => ({
  SectionWrapper: {
    minHeight: '90vh',
    marginTop: '5%',
    padding: '5% 0',
  },
  Heading: {
    fontSize: '4em',
    color: 'white',
    fontWeight: 'bold',
  },
  HighlightedText: {
    color: highlightedColor,
  },
  Description: {
    color: '#bbb',
    marginTop: '3em',
    padding: '0 15px',
  },
  PartnersWrapper: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginTop: '50px',
  },
  Partner: {
    width: '10%',
  },

  [breakpoints.md.gt]: {
    SectionWrapper: {
      paddingTop: '8%',
    },
    Heading: {
      fontSize: '4em',
      textAlign: 'left',
    },
    Description: {
      textAlign: 'left',
    },
  },

  [breakpoints.md.lt]: {
    SectionWrapper: {
      paddingTop: '20%',
    },
    Heading: {
      fontSize: '3.5em',
      textAlign: 'left',
    },
    Description: {
      textAlign: 'justify',
    },
  },

  [breakpoints.sm.lt]: {
    SectionWrapper: {paddingTop: '40%'},
    Heading: {fontSize: '3em'}
  },
})))(
  ({ classes, ...props }) => (
    <header className={classes.SectionWrapper} {...props}>
      <Container>
        <Row>
          <Col>
            <h1 className={classes.Heading}>
              <AnimatedLine wrapper={classes.SectionWrapper} queueNumber={0}>We</AnimatedLine>
              <AnimatedLine wrapper={classes.SectionWrapper} queueNumber={1}>
                <span className={classes.HighlightedText}>make</span>
              </AnimatedLine>
              <AnimatedLine wrapper={classes.SectionWrapper} queueNumber={2}>dreams reality</AnimatedLine>
            </h1>
          </Col>
        </Row>
        <Row>
          <AnimatedLine wrapper={classes.SectionWrapper} queueNumber={3}>
            <p className={classes.Description}>
              3dmania helps young startups, businesses and just curious people create solutions, utilizing most advanced Digital Manufacturing and IT technologies. We will gently guide you through the process of creating your dream!
            </p>
          </AnimatedLine>
        </Row>
      </Container>
    </header>
  )
)
