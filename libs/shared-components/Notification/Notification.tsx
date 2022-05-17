import { notification } from 'antd';
import { ArgsProps } from 'antd/es/notification';

export const Notification = (props: ArgsProps) => {
  notification.config({
    placement: 'topRight',
  });

  return notification.open({
    ...props,
  });
};
