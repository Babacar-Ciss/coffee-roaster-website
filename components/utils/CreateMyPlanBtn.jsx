import styled from 'styled-components'
import useStore from '../../store'

const CreateMyPlanBtnStyle = styled.button`
  width: 217px;
  height: 56px;
  display: block;
  background-color: ${(props) =>
    props.allFullFill ? 'var(--dark-cyan)' : 'var(--btn-diseabled)'};
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
    background-color: ${(props) =>
      props.allFullFill ? 'var(--btn-hover)' : 'var(--btn-diseabled)'};

    transition: all 0.3s;
    cursor: ${(props) => (props.allFullFill ? 'pointer' : 'not-allowed')};
  }

  @media (min-width: 1440px) {
    margin-right: 0;
    margin-left: auto;
  }
`

const CreateMyPlanBtn = () => {
  const allFullFill = useStore((state) => state.allFullFill)

  return (
    <CreateMyPlanBtnStyle
      allFullFill={allFullFill}
      disabled={!allFullFill}
      // onClick={() => console.log(allFullFill)}
    >
      Create my plan!
    </CreateMyPlanBtnStyle>
  )
}

export default CreateMyPlanBtn
