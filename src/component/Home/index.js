import {Component} from 'react'
import Loader from 'react-loader-spinner'
import {
  HomeContainer,
  NavBar,
  LogoImage,
  SelectContainer,
  Selector,
  CardContainer,
  CardList,
  Cards,
  Image,
  Content,
  Loading,
  Failure,
  FailImage,
  FailHeading,
  FailDesc,
  FailBtn,
} from './styledComponents'

const categoriesList = [
  {id: 'ALL', displayText: 'All'},
  {id: 'STATIC', displayText: 'Static'},
  {id: 'RESPONSIVE', displayText: 'Responsive'},
  {id: 'DYNAMIC', displayText: 'Dynamic'},
  {id: 'REACT', displayText: 'React'},
]

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}

class Home extends Component {
  state = {
    categories: categoriesList[0].id,
    apiStatus: apiStatusConstants.initial,
    projectList: [],
  }

  componentDidMount() {
    this.getProjectList()
  }

  onChangeSelect = event => {
    this.setState({categories: event.target.value}, this.getProjectList)
  }

  getProjectList = async () => {
    const {categories} = this.state
    this.setState({apiStatus: apiStatusConstants.inProgress})
    const apiUrl = `https://apis.ccbp.in/ps/projects?category=${categories}`
    const options = {
      method: 'GET',
    }
    const response = await fetch(apiUrl, options)
    if (response.ok) {
      const data = await response.json()
      const updatedData = data.projects.map(eachPro => ({
        id: eachPro.id,
        name: eachPro.name,
        imageUrl: eachPro.image_url,
      }))
      this.setState({
        projectList: updatedData,
        apiStatus: apiStatusConstants.success,
      })
    } else {
      this.setState({apiStatus: apiStatusConstants.failure})
    }
  }

  onRetry = () => {
    this.getProjectList()
  }

  renderFailureView = () => (
    <>
      <Failure>
        <FailImage
          src="https://assets.ccbp.in/frontend/react-js/projects-showcase/failure-img.png"
          alt="failure view"
        />
        <FailHeading>Oops! Something went wrong</FailHeading>
        <FailDesc>We cannot seem to find the page you are looking for</FailDesc>
        <FailBtn type="button" onClick={this.onRetry}>
          onRetry
        </FailBtn>
      </Failure>
    </>
  )

  renderLoadingView = () => (
    <Loading className="loader-container" data-testid="loader">
      <Loader type="ThreeDots" color="#3b82f6" height="50" width="50" />
    </Loading>
  )

  renderHomePage = () => {
    const {projectList} = this.state

    return (
      <>
        <CardContainer>
          <CardList>
            {projectList.map(item => (
              <Cards key={item.id}>
                <Image src={item.imageUrl} alt={item.name} />
                <Content>{item.name}</Content>
              </Cards>
            ))}
          </CardList>
        </CardContainer>
      </>
    )
  }

  renderAllStatus = () => {
    const {apiStatus} = this.state
    switch (apiStatus) {
      case apiStatusConstants.success:
        return this.renderHomePage()
      case apiStatusConstants.inProgress:
        return this.renderLoadingView()
      case apiStatusConstants.failure:
        return this.renderFailureView()
      default:
        return null
    }
  }

  render() {
    const {categories} = this.state
    return (
      <HomeContainer>
        <NavBar>
          <LogoImage
            src="https://assets.ccbp.in/frontend/react-js/projects-showcase/website-logo-img.png"
            alt="website logo"
          />
        </NavBar>
        <SelectContainer>
          <Selector value={categories} onChange={this.onChangeSelect}>
            {categoriesList.map(item => (
              <option value={item.id} key={item.id}>
                {item.displayText}
              </option>
            ))}
          </Selector>
          {this.renderAllStatus()}
        </SelectContainer>
      </HomeContainer>
    )
  }
}

export default Home
