import Link from 'next/link';

export default function Category () {
    return (
        <>
            <h1>Kumpulan Thread di Kategori 1</h1>
            <ul>
                <li className = 'rectangle-block'>
                    <Link href='thread'>
                        <a>Thread 1</a>
                    </Link>
                </li>
                <li className = 'rectangle-block'>
                    <Link href='thread'>
                        <a>Thread 2</a>
                    </Link>
                </li>
            </ul>
        </>
    ); 
}