import styled from 'styled-components'

const SingleNavigationStyle = styled.li`
  width: 255px;
  margin-bottom: 24px;
  font-weight: 900;
  font-size: 24px;
  line-height: 32px;
  display: flex;
  padding-bottom: 24px;
  border-bottom: 1px solid rgba(131, 136, 143, 0.25);
  cursor: pointer;
  opacity: 0.4;

  &:hover {
    opacity: 0.6;
    transition: all 0.3s;
  }

  &:last-child {
    padding-bottom: 0;
    border: none;
  }

  h4 {
    color: var(--grey);
    margin-right: 29px;
  }

  p {
    color: var(--dark-grey-blue);
  }
`

const SingleNavigation = ({ number, title }) => {
  return (
    <SingleNavigationStyle>
      <h4>{number}</h4>
      <p>{title}</p>
    </SingleNavigationStyle>
  )
}

export default SingleNavigation
