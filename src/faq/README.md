# FAQs

## Why is my connection to the online database failing?

The SPECCHIO online database is accessible on sc22.geo.uzh.ch via port 443. If
your firewall of your computer or institute blocks outgoing traffic to this
server and port, then a connection will fail. Test the connection to the
db.specchio.ch by using ping on the command line or terminal:

![Ping](./_img/ping.jpg)

If the packets are lost, you probably got a firewall problem. Try to configure
your firewall accordingly or talk to your system administrator.


## I cannot connect to the database due to a certificate error (13 FEB 2020)

Java version 8, build 1.8.0_241-b07 is apparently causing problems with the certificate with the current client.
If an error similar to this happens, please try to downgrade to build version 212.

![Certificate_error](./_img/certificate_problem.jpg)

The current client runs well with this version of Java:

openjdk version "1.8.0_212"
OpenJDK Runtime Environment (AdoptOpenJDK)(build 1.8.0_212-b03)
OpenJDK 64-Bit Server VM (AdoptOpenJDK)(build 25.212-b03, mixed mode)

25 JUL 2020:
Update on this issue: the problem is caused by a new feature introduced in Java release 8 241.
New Checks on Trust Anchor Certificates: Trust anchor certificates must include a Basic Constraints extension with the cA field set to true.

We hope to deliver a SPECCHIO version in the near future that can cope with this new security constraint.

Circumventing Solution: use this if you cannot downgrade your Java version.

Set your JVM to use this option: -Djdk.security.allowNonCaAnchor=true

Under UNIX, this can be done on the command line like so before starting the SPECCHIO client within the same shell:

export _JAVA_OPTIONS="-Djdk.security.allowNonCaAnchor=true"
java -jar specchio-client.jar



## I've uploaded HR-1024 files. Why are the wavelengths wrong when I export the data?

Your particular instrument is not registered in the SPECCHIO database. In the
current version of SPECCHIO, default wavelengths values are selected if the
instrument is not defined (i.e. no instrument specific wavelength calibrations
are available). The reason why you cannot insert your own instruments is due to
the database rights that keep SPECCHIO in its relational, non-redundant state.
If you want your instrument added, send an email to
<email-address
  name="specchioadmin" 
  domain="geo.uzh" 
  tld="ch"/>
with an HR-1024 example file
attached; also specify when the instrument was calibrated. We will add your
instrument definition to the database. This problem applied to V2 of SPECCHIO.


## I've transformed radiances into reflectances and exported them to a CSV file. Why can't I read the file properly in Matlab?

The output file can contain values like 'Infinity' and 'NaN', which is a problem
in Matlab, as the e.g. csvread expects numeric input only. This can be solved by
using an adapted reading routine for CSV files.


## Are my HR-1024 files supported?

Currently, the following restriction applies: the spectrum must be acquired
using the PDA software. Reason is that the laptop generated files have a
different file format, involving capturing dates formatted to the settings of
your laptop. If you think you need to read laptop generated files, drop an email
to 
<email-address
  name="specchioadmin" 
  domain="geo.uzh" 
  tld="ch"/>
including a version of your
output file and we'll see what we can do about a generic reader. Furthermore,
the option to remove the overlap between detectors is configurable and can
result in differing band combinations from the same instrument. This is
currently not supported in SPECCHIO. If you have a useful use case for the
overlap cutting option, please provide us with the information on how to get the
new bands based on instrument configuration data contained in the spectral file.


## What File Formats are supported?

This table lists all spectral file formats currently supported by the SPECCHIO
file readers:

| File Format                                                   | Devices / Systems                                                                            | Supported Formats                                                                                                             | Comments                                                                                                                                                                                                                                                                                                                                                               | Example                                                                                                                                                           |
| :------------------------------------------------------------ | :------------------------------------------------------------------------------------------- | :---------------------------------------------------------------------------------------------------------------------------- | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :---------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Analytical Spectral Devices                                   | ASD FieldSpecPro/FS3/FS4 spectroradiometers                                                  | Old ASD file format - ASD FS3, ASD FS PRO and ASD FSVNIR binary files                                                         | ASD Calibration files (*.ILL, *.REF, *.RAW) as stored on ASD laptops can also be loaded using SPECCHIO's Spectrum load functions. This permits advanced users to explore the information content of the Calibrations they describe.                                                                                                                                    | [DC.013](/faq/assets/DC.013.zip)                                                                                                                                  |
| Analytical Spectral Devices                                   | ASD FS4 and ASD spectroradiometers upgraded to newer software versions. Indico Pro Software. | New ASD file format - Indico Version 7 and higher                                                                             |                                                                                                                                                                                                                                                                                                                                                                        | [test00000.asd](/faq/assets/test00000.asd.zip)                                                                                                                    |
| Apogee                                                        | TBD                                                                                          | Apogee text files with TRM file extension                                                                                     | The SPECCHIO Apogee file loader was added to SPECCHIO on a user request. That is the only Apogee file example that has been available for testing. Therefore, this file reader has not been well tested. It is provided 'as is' and should be used with caution.                                                                                                       | [p5_2.TRM](/faq/assets/p5_2.TRM.zip)                                                                                                                              |
| Bruker                                                        | Bruker FTIR                                                                                  | Bruker FTIR text files with dpt extension                                                                                     |                                                                                                                                                                                                                                                                                                                                                                        | [TB0106.0.dpt](/faq/assets/TB0106.0.dpt.zip)                                                                                                                      |
| Exelis Visual Information Systems                             | ENVI Spectral Library                                                                        | ENVI Spectral library files (SLB and SLI)                                                                                     |                                                                                                                                                                                                                                                                                                                                                                        | [SLB_SampleSpectra](/faq/assets/SLB_SampleSpectra.zip)                                                                                                            |
| FGI proprietary HDF5 format                                   | ASD in combination with the FIGIFIGO goniometer                                              | HDF5 files and XML files                                                                                                      | Containing measurement data from FGI (Finish Geodetic Institute)                                                                                                                                                                                                                                                                                                       |                                                                                                                                                                   |
| Microsoft Excel                                               |                                                                                              | XLS files only CSV and XLSX etc are not supported (CSV files may be erroneously read as Ocean Optics SpectraSuite Data Files) | The first column of the Excel file must contain the Wavelength values in increasing order, with a heading in the first row. Each of the second and subsequent columns contains the data for a single Spectrum. The first row is the name of the Spectrum. Subsequent rows in the column contain the Spectrum values for the wavelengths specified in the first column. | [bfern.xls](/faq/assets/bfern.xls.zip)                                                                                                                            |
| MFR                                                           | MFR Sun Photometer                                                                           | MFR Photometer OUT files, MFR 7                                                                                               | These files contain the capture time, the sun zenith angle and the Spectral data for total, diffuse and direct irradiance. The sun angle and the direct irradiance data are discarded and only the total and diffuse Spectra are stored.                                                                                                                               | [30082005.OUT](/faq/assets/30082005.OUT.zip)                                                                                                                      |
| Ocean Optics                                                  | Ocean Optics Spectra Suite                                                                   | Ocean Optics Spectra Suite text files                                                                                         | The required file extension is .csv, although the files are not comma separated.                                                                                                                                                                                                                                                                                       | [oo_vnir__P1000.csv](/faq/assets/oo_vnir__P1000.csv.zip)                                                                                                          |
| Ocean Optics                                                  | Ocean Optics Ocean View Software                                                             | Ocean Optics Ocean View text files                                                                                            | The required file extension is .txt                                                                                                                                                                                                                                                                                                                                    | [MAYP1114952.txt](/faq/assets/MAYP1114952.txt.zip)                                                                                                                |
| PP Systems                                                    | UniSpec SC                                                                                   | UniSpec Single Beam text files                                                                                                | SPT file extension                                                                                                                                                                                                                                                                                                                                                     | [PC01.SPT](/faq/assets/PC01.SPT.zip)                                                                                                                              |
| PP Systems                                                    | UniSpec DC                                                                                   | UniSpec Dual Beam text files                                                                                                  | SPU file extension                                                                                                                                                                                                                                                                                                                                                     | [m09998.spu](/faq/assets/m09998.spu.zip)                                                                                                                          |
| Solar Systems                                                 | Microtops Sun Photometer                                                                     | Microtops text output files (TXT file extension)                                                                              | When read, three sub-folders named AOT, Spectrum and Spectrum StdDev are created. The input file name is used as the name of the Spectrum's name in the generated sub-folders. Each spectrum is augmented with its spatial position, sun zenith angle, air pressure and estimated atmospheric water content.                                                           |                                                                                                                                                                   |
| Spectra Vista Corporation                                     | GER 3700                                                                                     | GER 3700 signature text files (Files produced by other GER instruments are untested)                                          |                                                                                                                                                                                                                                                                                                                                                                        | [GR083005.082](/faq/assets/GR083005.082.zip)                                                                                                                      |
| Spectra Vista Corporation                                     | SVC HR-1024 <br> SVC HR-1024i                                                                | SVC HR-1024 files captured using a PDA                                                                                        | Files acquired with a laptop are a different file format and are not recognised by the current file loading routine. <br>The acquisition time may be wrongly read as it appears that the date format depends on the settings of the computer used to operate the SVC.                                                                                                  | File without GPS data: [HR.071710.0009.sig](/faq/assets/HR.071710.0009.sig.zip) <br> File with GPS data: [HR.080910.0010.sig](/faq/assets/HR.080910.0010.sig.zip) |
| Spectral Evolution                                            | Spectral Evolution Instruments                                                               | Spectral Evolution text files                                                                                                 | sed file extension                                                                                                                                                                                                                                                                                                                                                     | [1146003_00020.sed](/faq/assets/1146003_00020.sed.zip)                                                                                                            |
| Spectral Sciences Inc. and U.S. Air Force Research Laboratory | Modtran5 atmospheric radiative transfer model software                                       | Modtran Albedo files                                                                                                          | More information can be found on the [Modtran web site](http://www.Modtran5.com)                                                                                                                                                                                                                                                                                       | [spec_alb_APEX_OSD.dat](/faq/assets/spec_alb_APEX_OSD.dat.zip)                                                                                                    |
| Text File                                                     | IDL (Interactive Data Language) or ENVI text file output                                     | White space separated text files (as produced by IDL programs or ENVI when writing Spectral data to text files)               | Each file can hold one or more Spectra. <br>Values in each line are white space separated. Tabs are OK.                                                                                                                                                                                                                                                                | [mean_spec_sowe.txt](/faq/assets/mean_spec_sowe.txt.zip)                                                                                                          |
| USGS                                                          | USGS PRISM software                                                                          | SPECPR                                                                                                                        | [USGS speclab web page](https://speclab.cr.usgs.gov/spectral.lib06/) <br>[SPECPR file format specification](https://speclab.cr.usgs.gov/specpr-format.html)                                                                                                                                                                                                            | [specpr_single_spectra](/faq/assets/specpr_single_spectra.zip)                                                                                                    |

