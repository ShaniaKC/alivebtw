import React from 'react';
import IconLink from '../../minorcomponents/IconLinkGroup';
import PersonAddAlt1Icon from '@mui/icons-material/PersonAddAlt1';
import UpdateIcon from '@mui/icons-material/Update';
import MedicalServicesIcon from '@mui/icons-material/MedicalServices';
import FolderIcon from '@mui/icons-material/Folder';
import BusinessCenterOutlinedIcon from '@mui/icons-material/BusinessCenterOutlined';
import CreateOutlinedIcon from '@mui/icons-material/CreateOutlined';

const Sidebar = () => {
  return (
    <div className="col-sm-2 vh-100 pt-5 border-primary bg-white border-top border-end border-5">
      <IconLink to="/patient" text="Patient" icon={<PersonAddAlt1Icon />} />
      <IconLink to="/booking" text="Booking" icon={<UpdateIcon />} />
      <IconLink
        to="/resources"
        text="Resources"
        icon={<BusinessCenterOutlinedIcon />}
      />
      <IconLink to="/medical" text="Medical" icon={<MedicalServicesIcon />} />
      <IconLink to="/documents" text="Documents" icon={<FolderIcon />} />
      <IconLink to="/visit" text="Visit" icon={<CreateOutlinedIcon />} />
    </div>
  );
};

export default Sidebar;
