import Image from "next/image";

export default function Home() {
	return (
		<div>
			<div
				style={{
					width: "100px",
					height: "100px",
					position: "relative",
				}}>
				<Image
					src={"/puppy-development.jpg"}
					alt='puppy'
					layout='fill'
					objectFit='cover'
					objectPosition='center'
				/>
			</div>
		</div>
	);
}
