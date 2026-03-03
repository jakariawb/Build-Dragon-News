



import { Suspense,} from 'react';
import CaterogyPage from '../caterogy/CaterogyPage';

const LeftAside = () => { 
     
    return (
        <div className=''>
            <Suspense fallback={<span className="loading loading-dots loading-xl"></span>}>
                <CaterogyPage></CaterogyPage>
            </Suspense>
        </div>
    );
};

export default LeftAside;