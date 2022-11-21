import styled from 'styled-components'

const CreateMyPlanBtnStyle = styled.button`
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
  color: var(--light-cream);
  cursor: pointer;
  border: none;
  margin: 0 auto;

  &:hover {
    background-color: var(--btn-hover);
    transition: all 0.3s;
  }

  @media (min-width: 1440px) {
    margin-right: 0;
    margin-left: auto;
  }
`

const CreateMyPlanBtn = () => {
  return <CreateMyPlanBtnStyle>Create my plan!</CreateMyPlanBtnStyle>
}

export default CreateMyPlanBtn
