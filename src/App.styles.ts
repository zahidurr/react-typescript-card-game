import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  .header-content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 10vh;
    padding: 0 4vw;
    text-align: center;
  }

  .title {
    padding: 40px 0 10px 0;
    font-size: 2.8rem;
    font-weight: 400;
    color: #b8001f;
  }

  .info {
    padding: 5px 0;
    font-size: 25px;
    font-weight: 300;
  }

  .btn-next {
    cursor: pointer;
    background: linear-gradient(180deg, #ffffff, #ffcc91);
    border: 2px solid #d38558;
    box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.25);
    border-radius: 10px;
    height: 40px;
    margin: 20px 0;
    padding: 0 40px;
    display: inline;
    width: 230px;
  }
`;
