import { IoMenu } from 'react-icons/io5';
import Button from '../../../components/Button';

export default function MainMenu({ setLeftMenuStatus }) {
  return (
    <div className="bg-white border-t py-2">
      <div className="container">
        <Button
        onClick={() => setLeftMenuStatus(true)}
          className="p-0 align-middle bg-transparent"
        >
          <IoMenu
            color="gray"
            size={30}
          />
        </Button>
      </div>
    </div>
  )
}
