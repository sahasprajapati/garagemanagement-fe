import Modal from '@/ui/Modal/Modal';

interface IWarnModalProps {
  action: () => void;
  message: string;
  actionLabel: string;
  cancelAction: () => void;
}
export default function WarnModal({
  action,
  message,
  actionLabel,
  cancelAction,
}: IWarnModalProps) {
  return (
    <Modal
      id="warnModal"
      title="Warning!"
      footer={
        <>
          <div className="col-xxl-6 col-md-6 col-12 mx-auto px-4">
            <button
              className="btn btn-danger w-100"
              type="submit"
              data-bs-dismiss="modal"
              onClick={() => {
                action();
              }}
            >
              {actionLabel}
            </button>
          </div>
          <div className="col-xxl-6 col-md-6 col-12 mx-auto px-4">
            <button
              className="btn btn-primary w-100"
              type="submit"
              data-bs-dismiss="modal"
              onClick={() => {
                cancelAction();
              }}
            >
              Cancel
            </button>
          </div>
        </>
      }
    >
      <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">{message}</div>
    </Modal>
  );
}
