import { styled } from "styled-components"

const TagSection = styled.div`
    display: flex;
    align-items: center;
    background-color: var(--alice-blue-2);
    padding: 50px 100px;   
    width: 100%;
    justify-content: space-between;
    
    @media(max-width: 800px){
        flex-direction: column;
    }
`

const TextSection = styled.div`
    display: flex;
    flex-direction: column; 
    gap: 15px; 
    width: 400px;
    >span{
        border: 1px solid var(--platinum);
        width: 100%;
    }

    >h1{
        color: #1D3C51;
        font-weight: 500;
    }

    >h3{
        color:#1D3C51;
        font-weight: 500;
        font-size: 16px;
    }

    >p{
        color:#1D3C51;
        font-size: 12px; 
        font-weight: 600;
    }

    >div{ 
        display: flex; 
        height: 30px; 
        gap: 20px;
       
        >button{
            background-color: var(--dodger-blue);
            border: none;
            border-radius: 30px;
            color: white;
            padding: 10px;
            width: 150px;
            align-items: center;
            justify-content: center;
            font-size: 10px;
        }

        >img{
            width: 100px;
            height: 30px;
        }

    }
`

export function ThirdSection(){
    return(
        <TagSection>
            <img src="/comparativo_img_CTA.png" width={400} height={400} />
            <TextSection>
                <h1>Pronto para triplicar sua <strong>Geração de Leads?</strong></h1>
                <h3>Criação e ativação em <strong>4 minutos</strong>.</h3>
                <span></span>
                <div>
                    <button>VER DEMONSTRAÇÃO</button>
                    <img src="/selo_RD.png" alt=""  width={10} height={10}/>
                </div>
                <p><img src="/no-card-dark.webp"/>  Não é necessário cartao de crédito | <img src="/rating.webp"/> 4.9/5 média de satisfação</p>
            </TextSection>
        </TagSection>
        )
}