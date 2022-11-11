import styled from "styled-components";
import Link from "next/link";

const MenuStyle = styled.div`
    position: fixed;
    top: 90px;
    left: 0;
    width: 100%;
    height: 90%;
    background: linear-gradient(180deg, rgba(254, 252, 247, 0.504981) 0%, var(--bg-color) 60%);    

    transform: matrix(1, 0, 0, -1, 0, 0);

    display: flex;
    justify-content: center;
`

const LinksContainer = styled.div`
    transform: matrix(1, 0, 0, -1, 0, 0);
    display: flex;
    flex-direction: column;
    padding-top: 40px;

    & a {
        color: var(--dark-grey-blue);
        font-size: 24px;
        font-weight: 900;
        text-decoration: none;
        text-align: center;
        line-height: 32px;
        margin-bottom: 32px;
    }

`


const Menu = () => {
    return (
        <MenuStyle>
            <LinksContainer>
                <Link  href="/">Home</Link>
                <Link href="/About_Us">About Us</Link>
                <Link href="/Create_Your_Plan">Create Your Plan</Link>
            </LinksContainer>
        </MenuStyle>
    );
}

export default Menu;
