import Link from "next/link"

const movies = [
    {
        id: "1",
        title: "Movie"
    },
    {
        id: "2",
        title: "Movie"
    },
    {
        id: "3",
        title: "Movie"
    },
    {
        id: "4",
        title: "Movie"
    },
    {
        id: "5",
        title: "Movie"
    },
    {
        id: "6",
        title: "Movie"
    },
]

export default function MoviePage(){
    return (
        
            <div className="mt-10 flex items-center justify-center gap-3">
                {movies.map(movie => (
                    <Link href={`/movies/${movie.id}`}>
                    <div className="w-[100px] h-[50px] border border-1 border-red-500 flex justify-center items-center hover:bg-slate-500">
                        <p>{movie.title} {movie.id}</p>
                    </div>
                    </Link>
                ))}
            </div>
    ) 
}