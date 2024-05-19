export default function Page({ params }: { params: { movieId: string } }) {
  return (
    <div className="mt-10 flex items-center justify-center gap-3">
      <div className="w-[100px] h-[50px] border border-1 border-red-500 flex justify-center items-center hover:bg-slate-500">
        <p>Movie {params.movieId}</p>
      </div>
    </div>
  );
}
