import React from 'react'

function page({ product }: { product: string }) {
    return (
        <div>{product}</div>
    );
}

export default page;