import styled from 'styled-components'
import Link from 'next/link'

const CreateYourPlanCTAStyle = styled.div`
  & a {
    width: 217px;
    height: 56px;
    display: block;
    background-color: var(--dark-cyan);
    border-radius: 6px;
    padding: 16px 31px;
    text-decoration: none;
    font-family: 'Fraunces';
    font-weight: 900;
    font-size: 18px;
    line-height: 25px;
    text-align: center;
    color: #fefcf7;
  }
`

const CreateYourPlanCTA = () => {
  return (
    <CreateYourPlanCTAStyle>
      <Link href="/create your plan">Create your plan</Link>
    </CreateYourPlanCTAStyle>
  )
}

export default CreateYourPlanCTA
