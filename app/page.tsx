import { Metadata } from "next";

export const metadata: Metadata = {
    title: "ไทย",
    description: "test",
};

export default async function Home() {
    return (
        <>
            <div className="btn btn-square">Hellop</div>
        </>
    );
}
