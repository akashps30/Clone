import React, { useState } from 'react';
import { Container, Row, Col, Card, Pagination } from 'react-bootstrap';

const NoticeBoard = () => {
  const allNotices = [
    {
      date: 'Sep 13 2024',
      title: 'Important Notice: Constable (GD) in Central Armed Police Forces (CAPFs), SSF, and Rifleman (GD) in Assam Rifles Examination, 2024.',
      size: '356.18 KB',
    },
    {
      date: 'Sep 13 2024',
      title: "Filling up of ex-cadre Group 'B' post of Accounts Officer in Regional Offices of SSC on deputation basis.",
      size: '1.71 MB',
    },
    {
      date: 'Sep 10 2024',
      title: 'Important Notice - Malpractices in Examinations conducted by the Commission',
      size: '229.95 KB',
    },
    {
      date: 'Sep 10 2024',
      title: 'Important Notice of Phase-XII/2024/Selection Posts Examination.',
      size: '45.58 KB',
    },
    {
      date: 'Sep 9 2024',
      title: "Grade 'C' Stenographers Limited Departmental Competitive Examination, 2018 & 2019: Declaration of final result for the year 2018",
      size: '590.40 KB',
    },
    {
      date: 'Sep 13 2024',
      title: "Filling up of ex-cadre Group 'B' post of Accounts Officer in Regional Offices of SSC on deputation basis.",
      size: '1.71 MB',
    },
    {
      date: 'Sep 13 2024',
      title: "Filling up of ex-cadre Group 'B' post of Accounts Officer in Regional Offices of SSC on deputation basis.",
      size: '1.71 MB',
    },
    {
      date: 'Sep 13 2024',
      title: "Filling up of ex-cadre Group 'B' post of Accounts Officer in Regional Offices of SSC on deputation basis.",
      size: '1.71 MB',
    },
    {
      date: 'Sep 13 2024',
      title: "Filling up of ex-cadre Group 'B' post of Accounts Officer in Regional Offices of SSC on deputation basis.",
      size: '1.71 MB',
    },
    {
      date: 'Sep 13 2024',
      title: "Filling up of ex-cadre Group 'B' post of Accounts Officer in Regional Offices of SSC on deputation basis.",
      size: '1.71 MB',
    },
    {
      date: 'Sep 13 2024',
      title: "Filling up of ex-cadre Group 'B' post of Accounts Officer in Regional Offices of SSC on deputation basis.",
      size: '1.71 MB',
    },
    {
      date: 'Sep 13 2024',
      title: "Filling up of ex-cadre Group 'B' post of Accounts Officer in Regional Offices of SSC on deputation basis.",
      size: '1.71 MB',
    },
    {
      date: 'Sep 13 2024',
      title: "Filling up of ex-cadre Group 'B' post of Accounts Officer in Regional Offices of SSC on deputation basis.",
      size: '1.71 MB',
    },
    // Add more notices as needed
  ];

  const [currentPage, setCurrentPage] = useState(1);
  const noticesPerPage = 18;

  // Logic to display the notices based on pagination
  const indexOfLastNotice = currentPage * noticesPerPage;
  const indexOfFirstNotice = indexOfLastNotice - noticesPerPage;
  const currentNotices = allNotices.slice(indexOfFirstNotice, indexOfLastNotice);

  return (
    <Container fluid>
      <Row className="justify-content-center">
        <Col xs={12} md={10} lg={12}>
          <Card className="border border-brown rounded-4">
            <Card.Header className="bg-white text-center fs-5 fw-bold sticky-top">Notice Board</Card.Header>
            <Card.Body className="p-3" style={{ height: '600px', overflowY: 'scroll' }}>
              {currentNotices.map((notice, index) => (
                <Card key={index} className="mb-3 border-0">
                  <Card.Body className="p-2">
                    <Row>
                      <Col xs={3} className="text-center text-danger fw-bold">
                        {notice.date}
                      </Col>
                      <Col xs={7}>
                        <Card.Title className="fs-6 text-dark mb-1">{notice.title}</Card.Title>
                      </Col>
                      <Col xs={2} className="text-end">
                        <a href="#" className="text-danger fw-bold">{notice.size}</a>
                      </Col>
                    </Row>
                  </Card.Body>
                </Card>
              ))}
            </Card.Body>

            {/* Pagination */}
            <div className="pagination-container text-center mb-3">
              <Pagination>
                <Pagination.Prev onClick={() => setCurrentPage(currentPage > 1 ? currentPage - 1 : currentPage)} />
                <Pagination.Item active={currentPage === 1} onClick={() => setCurrentPage(1)}>1</Pagination.Item>
                <Pagination.Item active={currentPage === 2} onClick={() => setCurrentPage(2)}>2</Pagination.Item>
                <Pagination.Item active={currentPage === 3} onClick={() => setCurrentPage(3)}>3</Pagination.Item>
                <Pagination.Ellipsis />
                <Pagination.Item active={currentPage === 17} onClick={() => setCurrentPage(17)}>17</Pagination.Item>
                <Pagination.Next onClick={() => setCurrentPage(currentPage < 17 ? currentPage + 1 : currentPage)} />
              </Pagination>
            </div>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default NoticeBoard;

