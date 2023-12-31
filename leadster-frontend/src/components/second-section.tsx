import { styled } from "styled-components"
import { FilterSection } from "./filter-section"
import info from '@/components/data.json'
import { useContext, useEffect, useState} from "react"
import { FilterContext } from "@/contexts/FilterContext"

interface DataProps{
    title:string, views:number, category: string, data:number, url:string, id:number
}
const TagSection = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 24px 120px;    
`

const FilterContainer = styled.div`
    display: flex;
    gap: 8px;
    align-items: center;
    justify-content: center;
    margin-top: 24px;
    >button{
        &.nopressed{
            background-color: transparent;
            font-weight: 500;
            font-family: inherit;
            width: 20px;
            border: none;
        } 
        
        
        &.pressed{
            font-weight: 500;
            font-family: inherit;
            width: 20px;
            background-color: transparent;
            border: 1px solid var(--dodger-blue);
            border-radius: 5px;
            color: var(--dodger-blue);
        }

    }
`
const HorizontalLine = styled.div`
    border: 1px solid var(--platinum);
    width: 100%;
`

const ListContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, 256px);
    grid-gap: 32px;
    max-width: 100%;
    margin-top: 32px;
    margin-bottom: 32px;
`
const VideoCard = styled.div`
    display: flex;
    justify-content: flex-start;
    flex-direction: column;
    cursor: pointer; 
    border-radius: 5px;
    box-shadow: var(--platinum) 1px 5px 25px;
    width: 256px;

    >div{
        &.image{
            display: flex; 
            background-color: blue;
            background-image: url("/play.png");
            background-position: center;
            background-repeat: no-repeat;
        }
        &.title{
            display: flex;
            flex: 1;
            align-items: center;
            padding: 10px 20px;
            font-family: inherit;
            font-weight: 600;
            color: #1D3C51;
        }
    }

    &:hover{
        p{
            color: blue;
        }
        img{
            opacity: 0.6;           
        }
    }
    
`



export function SecondSection(){ 
    const {category,order, currentPage, isOpen,setCurrentPage, PageButtonIndex, setPageButtonIndex, setIsOpen, setCurrentTitle, setCurrentUrl} = useContext(FilterContext)
    const data: DataProps[] = info
    const startIndex = currentPage *9; 
    const endIndex = startIndex + 9; 
    const currentData = data.filter((item)=> item.category == category)
    const pages = Math.ceil(currentData.length/9);
    const currentDataSliceByViews = currentData.slice(startIndex,endIndex).sort((x,y) => { return x.views - y.views})
    const currentDataSliceByData = currentData.slice(startIndex,endIndex).sort((x,y) => { return x.data - y.data})
    

    return(
        <TagSection>
            <FilterSection/>
            <HorizontalLine />
            <ListContainer>
                { order == "data" ? currentDataSliceByData?.map((data)=>(
                <VideoCard
                    onClick={()=> {
                        setCurrentTitle(data.title)
                       setCurrentUrl(data.url)
                        setIsOpen(!isOpen)
                    }
                        }
                     key={data.id}>
                    <div className="image">
                        <img src="/thumbnail.png" width={256} />
                    </div>
                    <div className="title">
                    <p>{data.title}</p>

                    </div>
                     
                </VideoCard>
                 )) : currentDataSliceByViews?.map((data)=>(
                    <VideoCard 
                    onClick={()=>{
                        setCurrentTitle(data.title)
                       setCurrentUrl(data.url)
                        setIsOpen(!isOpen)
                    }}
                    key={data.id}>
                        <div className="image">
                            <img src="/thumbnail.png" width={256} />
                        </div>
                        <div className="title">
                        <p>{data.title}</p>
    
                        </div>
                        
                    </VideoCard>
                     ))}

                     
            </ListContainer>
            <HorizontalLine />
            <FilterContainer>
                <span>Página</span>
                {Array.from(Array(pages), (item, index)=>{
                    return ( 
                    <button
                    key={'id'}
                    className={PageButtonIndex == index ? "pressed" : "nopressed"}
                    value={index} 
                    onClick={()=> {
                        setCurrentPage(index)
                        setPageButtonIndex(index)
                    }}>{index+1}</button>)
                })}
            </FilterContainer>

            
        </TagSection>
    )
}