import { SpinProps } from '../../../types';
import { Spin as AntSpin } from 'antd';

export const Spin: React.FC<SpinProps> = (props) => <AntSpin {...props} />;
