import React, { useState, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faQrcode, faDownload } from '@fortawesome/free-solid-svg-icons';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import QRCode from 'qrcode.react';
import { toPng } from 'html-to-image';

const htmlToImage = { toPng };
library.add(faQrcode, faDownload);

function RecentSalesTables({ items }) {
  const [showQrModal, setShowQrModal] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const qrCodeRef = useRef(null);

  const handleStatus = status => {
    switch (status) {
      case 'Approved':
        return 'success';
      case 'Pending':
        return 'warning';
      case 'Rejected':
        return 'danger';
      default:
        return 'success';
    }
  };

  const handleQrButtonClick = item => {
    setSelectedItem(item);
    setShowQrModal(true);
  };

  const handleCloseQrModal = () => {
    setShowQrModal(false);
  };

  const handleDownloadQr = () => {
    // Generate a unique QR Code for the selected item
    const qrCodeValue = `Product ID: ${selectedItem.number}\n
    Company Name: ${selectedItem.customer}\n
    Description: ${selectedItem.product}\n
    Device ID: ${selectedItem.price}\n
    Status: ${selectedItem.status}`;

    // Convert the QR Code container to an image
    htmlToImage.toPng(qrCodeRef.current)
      .then(function (dataUrl) {
        // Create a temporary link to download the image
        const link = document.createElement('a');
        link.href = dataUrl;
        link.download = `QR_Code_${selectedItem?.number || 'Unknown'}.png`;
        link.click();
      })
      .catch(function (error) {
        console.error('Error generating QR Code image:', error);
      });
  };

  return (
    <div>
      <table className="table table-borderless datatable">
        <thead className="table-light">
          <tr>
            <th scope="col">Product ID</th>
            <th scope="col">Company Name</th>
            <th scope="col">Description</th>
            <th scope="col">Device ID</th>
            <th scope="col">Status</th>
            <th scope="col">QR</th>
          </tr>
        </thead>
        <tbody>
          {items && items.length > 0 && items.map(item => (
            <tr key={item._id}>
              <th scope="row">
                <a href="#">{item.number}</a>
              </th>
              <td>{item.customer}</td>
              <td>
                <a href="#" className="text-primary">{item.product}</a>
              </td>
              <td><a href="#" className="text-primary-bold">{item.price}</a></td>
              <td>
                <span className={`badge bg-${handleStatus(item.status)}`}>
                  {item.status}
                </span>
              </td>
              <td>
                <FontAwesomeIcon
                  icon="qrcode"
                  style={{ color: "#0b1f41", cursor: "pointer" }}
                  onClick={() => handleQrButtonClick(item)}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <Modal show={showQrModal} onHide={handleCloseQrModal}>
        <Modal.Header closeButton>
          <Modal.Title>Details and QR Code</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {selectedItem && (
            <div style={{ textAlign: 'left' }}>
              <p><b>Product ID:</b>{selectedItem.number}</p>
              <p><b>Company Name:</b> {selectedItem.customer}</p>
              <p><b>Description:</b> {selectedItem.product}</p>
              <p><b>Device ID:</b> {selectedItem.price}</p>
              <p><b>Status:</b> {selectedItem.status}</p>
              {/* Display unique QR Code for the selected item using qrcode.react */}
              <div ref={qrCodeRef}>
                <QRCode value={`Product ID: ${selectedItem.number}\n
                                Company Name: ${selectedItem.customer}\n
                                Description: ${selectedItem.product}\n
                                Device ID: ${selectedItem.price}\n
                                Status: ${selectedItem.status}`} size={150}/>
              </div>
            </div>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseQrModal}>
            Close
          </Button>
          <Button variant="success" onClick={handleDownloadQr}>
            <FontAwesomeIcon icon="download" className="me-2" />
            Download QR
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default RecentSalesTables;