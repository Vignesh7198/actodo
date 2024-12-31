
export default function Card(card)
{

    return(
        <div style={{backgroundColor:card.backGroundColor}} className="px-10 py-5 border rounded-md text-center flex-grow">
          <h1 className="font-medium text-2xl">{card.title}</h1>
          <p>{card.subtitle}</p>
        </div>
    )

}