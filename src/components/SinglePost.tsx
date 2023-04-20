import Button from "react-bootstrap/Button"
const SinglePost = () => {
    return (
        <div className="sectionContainer">
            <div>
                <div className="PostButton d-inline-block">
                    <img src="https://picsum.photos/48/48" alt="Foto profilo" />
                </div>
                <div className="PostProfile d-inline-block ms-3">
                    <span className="d-inline-block">Angelo Greco</span> <p className="d-inline-block">• Già segui</p>
                    <p>Avvocato direttore di leggepertutti.it</p>
                    <p>25 minuti • <i className="bi bi-globe-americas text-black"></i> </p>
                </div>
                <div className="PostText">
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda ipsam odit, temporibus velit sunt voluptates. Eos officiis nobis corporis illo sapiente, aperiam architecto, itaque voluptatibus perferendis, ipsum tempore totam pariatur?
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, fugiat autem. Rerum, incidunt odio provident soluta nobis atque quo necessitatibus enim? Veniam fuga non quasi exercitationem, sint ad est aliquid.</p>
                </div>
                <div className="text-center mb-2" >
                    <img className="w-100" src="https://picsum.photos/480/200" alt="Foto post" />
                </div>
                <div className="CommentSection d-flex justify-content-between"><p><i className="bi bi-hand-thumbs-up-fill"></i> 5709</p>
                    <p> 880 commenti • 202 diffusioni post</p></div>
                <hr />
                <div className="Btnsection d-flex justify-content-evenly align-items-center">
                    <Button className="text-secondary" variant="ms-1"><i className=" fs-5 me-1 bi bi-hand-thumbs-up"></i> Consiglia</Button>{' '}
                    <Button className="text-secondary" variant="ms-1"><i className=" fs-5 me-1 bi bi-chat-dots-fill"></i> Commenta</Button>{' '}
                    <Button className="text-secondary" variant="ms-1"><i className=" fs-5 me-1 bi bi-arrow-repeat"></i> Diffondi il post</Button>{' '}
                    <Button className="text-secondary" variant="ms-1"><i className=" fs-5 me-1 bi bi-send-fill"></i> Invia</Button>{' '}
                </div>
            </div>
        </div>
    )

}

export default SinglePost
