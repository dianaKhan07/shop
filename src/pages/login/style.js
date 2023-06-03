import styled from "styled-components";
export const FormWrapper = styled.form`
    width: 20%;
    margin: 0 auto;
    // border: 2px solid #338bce;
    padding: 1rem;
    border-radius: 10px;
    margin-top: 150px;
    -webkit-box-shadow: 25px 25px 35px 10px rgba(51, 139, 206, 0.35);
    -moz-box-shadow: 25px 25px 35px 10px rgba(51, 139, 206, 0.35);
     box-shadow: 25px 25px 35px 10px rgba(51, 139, 206, 0.35);
   
    @media (max-width: 1200px) {  
        width: 20%;
    }
    @media (max-width: 992px) {  
      width: 25%;
    }
    @media (max-width: 768px) { 
        width: 35%;
    }
    @media (max-width: 576px) {  
        width: 45%;
    }
    @media (max-width: 410px) {  
        width: 50%;
    }
    
`
export const Title = styled.h3`
    text-align: center;
    color: #1677ff;
    font-size: 20px;
`
export const TitleLink = styled.p`
    text-align: right;
    font-size: 13px; 

    & span {
        margin-right: 3px;
    }
`