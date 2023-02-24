import { useRouter } from 'next/router'

function ClientsProjectPage() {

    const router = useRouter();
    console.log(router.query)

    function loadProject(){
        //loadproject handler
        router.push({
            pathname: '/clients/[id]/[clientprojectid]',
            query: {id: 'max', clientprojectid:"projecta"}
        })
    }
    return (
        <div>
            <h1>The project of a given client </h1>
            <button onClick={loadProject}>Load project A </button>
        </div>
    )
}

export default ClientsProjectPage